package com.funds.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;

/**
 * Created by jiang.qi on 2016/9/28.
 */
@Controller
public class FundsController {

    @RequestMapping(value = "/welcome")
    public ModelAndView pageForward() {
        return new ModelAndView("funds");
    }

}
