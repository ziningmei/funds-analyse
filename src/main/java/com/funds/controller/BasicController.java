package com.funds.controller;

import org.springframework.web.bind.annotation.ModelAttribute;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

/**
 * Created by jiang.qi on 2016/7/11.
 */
//默认情况下，Controller是单例的，缓存内容会有线程安全问题
public abstract class BasicController {

    protected HttpServletResponse httpResponse;
    protected HttpServletRequest httpRequest;
    protected HttpSession httpSession;

    @ModelAttribute
    public void setReqAndRes(HttpServletRequest request, HttpServletResponse response) {
        this.httpRequest = request;
        this.httpResponse = response;
        this.httpSession = request.getSession();
    }

}
