package com.funds.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;

/**
 * Created by jiang.qi on 2016/9/29.
 */
@Controller
public class CommonController {

    @RequestMapping(value = "/welcome")
    public ModelAndView pageForward() {
        return new ModelAndView("funds");
    }

    @RequestMapping(value = "/{path}")
    public ModelAndView Forward(@PathVariable String path) {
        return new ModelAndView(path);
    }
}
