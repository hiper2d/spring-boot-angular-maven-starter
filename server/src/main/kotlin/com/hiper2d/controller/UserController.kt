package com.hiper2d.controller

import org.springframework.security.authentication.UsernamePasswordAuthenticationToken
import org.springframework.security.core.context.SecurityContextHolder
import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.PostMapping
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.RestController

@RestController
@RequestMapping("/api/user")
class UserController {

    @GetMapping
    fun getUser(): String? {
        val auth = SecurityContextHolder.getContext().authentication
        return if (auth is UsernamePasswordAuthenticationToken) {
            auth.principal as String
        } else {
            null
        }
    }
}
