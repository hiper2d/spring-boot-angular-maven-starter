package com.hiper2d.config

import org.springframework.context.annotation.Configuration
import org.springframework.web.servlet.config.annotation.CorsRegistry
import org.springframework.web.servlet.config.annotation.EnableWebMvc
import org.springframework.web.servlet.config.annotation.WebMvcConfigurerAdapter

@Configuration
@EnableWebMvc
open class WebConfig: WebMvcConfigurerAdapter() {
    override fun addCorsMappings(registry: CorsRegistry?) {
        super.addCorsMappings(registry)
        registry!!.addMapping("/api/**")
    }
}

