package com.funds.service;

import com.funds.dto.FundsDto;
import com.funds.entities.FundsEntity;

import java.util.List;

/**
 * @author Administrator
 *
 */
public interface FundsService{

    public List<FundsEntity> getFundsList(FundsDto fundsDto);

}
