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

import java.math.BigDecimal;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.List;

@Service
class FundsServiceImpl implements FundsService {

	@Autowired
	private FundsDao fundsDao;

	@Override
	public List<FundsEntity> getTotalFundsList(FundsDto fundsDto) {
		List<FundsEntity> list = fundsDao.getFundsList(fundsDto);
		for (FundsEntity entity : list) {
			entity.setPerPrice(entity.getPerPrice().multiply(new BigDecimal(100)));
		}
		return list;
	}

	@Override
	public List<FundsEntity> getStartFundsList(FundsDto fundsDto) throws ParseException {
		List<FundsEntity> list = fundsDao.getFundsList(fundsDto);
		List<FundsEntity> resultList = new ArrayList<>();
		FundsEntity entity = null;
		for (int i = 1; i < list.size(); i++) {
			entity = list.get(i);
			SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd");
			long m = sdf.parse(entity.getDate()).getTime() - sdf.parse(list.get(i - 1).getDate()).getTime();
			if (m / (1000 * 60 * 60 * 24) > 1) {
				entity.setDayRate((entity.getPerPrice().subtract(list.get(i - 1).getPerPrice())).multiply(new BigDecimal(100)));
				resultList.add(entity);
			}
		}
		return resultList;
	}

	@Override
	public List<FundsEntity> getEndFundsList(FundsDto fundsDto) throws ParseException {
		List<FundsEntity> list = fundsDao.getFundsList(fundsDto);
		List<FundsEntity> resultList = new ArrayList<>();
		FundsEntity entity = null;
		for (int i = 1; i < list.size()-1; i++) {
			entity = list.get(i);
			SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd");
			long m = sdf.parse(list.get(i + 1).getDate()).getTime() - sdf.parse(entity.getDate()).getTime();
			if (m / (1000 * 60 * 60 * 24) > 1) {
				entity.setDayRate((entity.getPerPrice().subtract(list.get(i - 1).getPerPrice())).multiply(new BigDecimal(100)));
				resultList.add(entity);
			}
		}
		return resultList;
	}

	@Override
	public List<FundsEntity> getGapFundsList(FundsDto fundsDto) {
		List<FundsEntity> list = fundsDao.getFundsList(fundsDto);
		FundsEntity entity = null;
		for (int i = 1; i < list.size(); i++) {
			entity = list.get(i);
			SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd");
			entity.setDayRate((entity.getPerPrice().subtract(list.get(i - 1).getPerPrice())).multiply(new BigDecimal(100)));
		}
		return list;
	}
}