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

    @RequestMapping(value = "/getTotalFundsList",produces = "application/json;charset=UTF-8",method = RequestMethod.POST)
    public Result getTotalFundsList(@RequestBody FundsDto fundsDto){
        Result result=new Result();
        try{
            List<FundsEntity> list=fundsService.getTotalFundsList(fundsDto);
            result.setResData(JSON.toJSON(list).toString());
        }catch (Exception e){
            result.setResData(e.toString());
            result.setSuccess(false);
        }
        return result;
    }

    @RequestMapping(value = "/getStartFundsList",produces = "application/json;charset=UTF-8",method = RequestMethod.POST)
    public Result getStartFundsList(@RequestBody FundsDto fundsDto){
        Result result=new Result();
        try{
            List<FundsEntity> list=fundsService.getStartFundsList(fundsDto);
            result.setResData(JSON.toJSON(list).toString());
        }catch (Exception e){
            result.setResData(e.toString());
            result.setSuccess(false);
        }
        return result;
    }

    @RequestMapping(value = "/getEndFundsList",produces = "application/json;charset=UTF-8",method = RequestMethod.POST)
    public Result getEndFundsList(@RequestBody FundsDto fundsDto){
        Result result=new Result();
        try{
            List<FundsEntity> list=fundsService.getEndFundsList(fundsDto);
            result.setResData(JSON.toJSON(list).toString());
        }catch (Exception e){
            result.setResData(e.toString());
            result.setSuccess(false);
        }
        return result;
    }

    @RequestMapping(value = "/getGapFundsList",produces = "application/json;charset=UTF-8",method = RequestMethod.POST)
    public Result getGapFundsList(@RequestBody FundsDto fundsDto){
        Result result=new Result();
        try{
            List<FundsEntity> list=fundsService.getGapFundsList(fundsDto);
            result.setResData(JSON.toJSON(list).toString());
        }catch (Exception e){
            result.setResData(e.toString());
            result.setSuccess(false);
        }
        return result;
    }

}
