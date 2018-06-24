package com.hiper2d.security.provider

import org.springframework.security.authentication.AuthenticationProvider
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken
import org.springframework.security.core.Authentication
import org.springframework.stereotype.Component

@Component
class AnyAuthenticationProvider: AuthenticationProvider {

    override fun authenticate(token: Authentication?): Authentication? {
        val name: String? = token?.name
        val pass: String? = token?.credentials.toString()
        return if (name != null && pass != null) {
            UsernamePasswordAuthenticationToken(name, pass, emptyList())
        } else {
            null
        }
    }

    override fun supports(clazz: Class<*>?): Boolean {
        return true
    }
}