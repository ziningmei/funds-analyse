package com.funds.service;

import com.funds.dto.FundsDto;
import com.funds.entities.FundsEntity;

import java.text.ParseException;
import java.util.List;

/**
 * @author Administrator
 *
 */
public interface FundsService{

    public List<FundsEntity> getTotalFundsList(FundsDto fundsDto);

    List<FundsEntity> getStartFundsList(FundsDto fundsDto) throws ParseException;

    List<FundsEntity> getEndFundsList(FundsDto fundsDto) throws ParseException;

    List<FundsEntity> getGapFundsList(FundsDto fundsDto);
}
