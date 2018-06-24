package com.hiper2d.config

import com.hiper2d.security.handler.CustomLogoutSuccessHandler
import com.hiper2d.security.provider.AnyAuthenticationProvider
import org.springframework.context.annotation.Configuration
import org.springframework.http.HttpStatus
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder
import org.springframework.security.config.annotation.web.builders.HttpSecurity
import org.springframework.security.config.annotation.web.builders.WebSecurity
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter
import org.springframework.security.web.authentication.HttpStatusEntryPoint
import org.springframework.security.web.util.matcher.AntPathRequestMatcher

@Configuration
@EnableWebSecurity
class WebSecurityConfig(
        private val customLogoutSuccessHandler: CustomLogoutSuccessHandler,
        private val anyAuthenticationProvider: AnyAuthenticationProvider
): WebSecurityConfigurerAdapter() {

    override fun configure(auth: AuthenticationManagerBuilder) {
        auth.authenticationProvider(anyAuthenticationProvider)
    }

    override fun configure(http: HttpSecurity) {
        http
                .httpBasic()
                .and()
                .authorizeRequests()
                    .antMatchers("/").permitAll()
                    .anyRequest().authenticated()
                .and()
                .logout()
                    .logoutRequestMatcher(AntPathRequestMatcher("/api/logout", "POST"))
                    .logoutSuccessHandler(customLogoutSuccessHandler)
                .and()
                .csrf()
                    .ignoringAntMatchers("/api/login", "/api/logout")
                .and()
                .exceptionHandling()
                .authenticationEntryPoint(HttpStatusEntryPoint(HttpStatus.UNAUTHORIZED))
    }

    override fun configure(web: WebSecurity) {
        web.ignoring()
                .mvcMatchers("/index.html")
                .mvcMatchers("/*.css")
                .mvcMatchers("/*.js")
    }
}