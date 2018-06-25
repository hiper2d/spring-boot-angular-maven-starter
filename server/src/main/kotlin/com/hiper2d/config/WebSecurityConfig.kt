package com.hiper2d.config

import com.hiper2d.security.provider.AnyAuthenticationProvider
import org.springframework.context.annotation.Configuration
import org.springframework.http.HttpStatus
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder
import org.springframework.security.config.annotation.web.builders.HttpSecurity
import org.springframework.security.config.annotation.web.builders.WebSecurity
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter
import org.springframework.security.web.authentication.HttpStatusEntryPoint
import org.springframework.security.web.csrf.CookieCsrfTokenRepository
import org.springframework.security.web.util.matcher.AntPathRequestMatcher

@Configuration
@EnableWebSecurity
class WebSecurityConfig(
        private val anyAuthenticationProvider: AnyAuthenticationProvider
): WebSecurityConfigurerAdapter() {

    override fun configure(auth: AuthenticationManagerBuilder) {
        // A custom provider which allows to authenticate with any Latin username/password
        auth.authenticationProvider(anyAuthenticationProvider)
    }

    override fun configure(http: HttpSecurity) {
        http
            .httpBasic()
            .and()
            .authorizeRequests()
                // Necessary when running the application with compiled client as static resources
                .antMatchers("/").permitAll()
                .anyRequest().authenticated()
            .and()
            .logout()
                .logoutRequestMatcher(AntPathRequestMatcher("/api/logout", "POST"))
            .and()
            .csrf()
                // Allow a JavaScript client to read the XSRF-TOKEN from cookie
                .csrfTokenRepository(CookieCsrfTokenRepository.withHttpOnlyFalse())
            .and()
                // Use MVC CORS configuration
                .cors()
            .and()
            .exceptionHandling()
                // An AuthenticationEntryPoint that sends a generic HttpStatus as a response
                .authenticationEntryPoint(HttpStatusEntryPoint(HttpStatus.UNAUTHORIZED))
    }

    override fun configure(web: WebSecurity) {
        // Everything below is necessary when running the application with compiled client as static resources
        web.ignoring()
                .mvcMatchers("/index.html")
                .mvcMatchers("/*.css")
                .mvcMatchers("/*.js")
    }
}