package com.funds.dao;

import com.funds.dto.FundsDto;
import com.funds.entities.FundsEntity;

import java.util.List;

/**
 * Created by jiang.qi on 2016/9/28.
 */
public interface FundsDao {

    List<FundsEntity> getFundsList(FundsDto fundsDto);

}
