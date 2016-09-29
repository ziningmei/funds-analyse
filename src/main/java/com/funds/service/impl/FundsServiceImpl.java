/**
 * @author jq
 * @time 2015年10月28日 下午5:00:33
 */
package com.funds.service.impl;

import com.funds.dao.FundsDao;
import com.funds.dto.FundsDto;
import com.funds.entities.FundsEntity;
import com.funds.service.FundsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
class FundsServiceImpl implements FundsService {

	@Autowired
	private FundsDao fundsDao;


	@Override
	public List<FundsEntity> getFundsList(FundsDto fundsDto) {
		return null;
	}
}