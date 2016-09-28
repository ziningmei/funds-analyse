/**
 * @author jq
 * @time 2015年10月28日 下午5:00:33
 */
package com.funds.service.impl;

import com.funds.dao.FundsDao;
import com.funds.service.FundsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
class FundsServiceImpl implements FundsService {

	@Autowired
	private FundsDao answerDao;


}