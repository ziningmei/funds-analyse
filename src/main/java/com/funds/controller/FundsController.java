package com.funds.controller;

import com.alibaba.fastjson.JSON;
import com.funds.dto.FundsDto;
import com.funds.entities.FundsEntity;
import com.funds.entities.Result;
import com.funds.service.FundsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

/**
 * Created by jiang.qi on 2016/9/28.
 */
@RestController
@RequestMapping("/funds")
public class FundsController extends BasicController{

    @Autowired
    private FundsService fundsService;

    @RequestMapping(value = "",produces = "application/json;charset=UTF-8",method = RequestMethod.POST)
    public Result getTotalFundsList(@RequestBody FundsDto fundsDto){

        List<FundsEntity> list=fundsService.getFundsList(fundsDto);
        Result result=new Result();
        result.setResData(JSON.toJSON(list).toString());
        return result;
    }

}
