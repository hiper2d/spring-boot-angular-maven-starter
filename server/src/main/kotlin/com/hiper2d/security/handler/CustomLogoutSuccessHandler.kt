package com.hiper2d.security.handler

import org.springframework.http.HttpStatus
import org.springframework.security.core.Authentication
import org.springframework.security.web.authentication.logout.LogoutSuccessHandler
import org.springframework.stereotype.Component
import javax.servlet.http.HttpServletRequest
import javax.servlet.http.HttpServletResponse

@Component
class CustomLogoutSuccessHandler: LogoutSuccessHandler {

    override fun onLogoutSuccess(request: HttpServletRequest, response: HttpServletResponse, token: Authentication?) {
        response.status = HttpStatus.OK.value()
    }
}