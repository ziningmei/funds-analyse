package com.funds.entities;

import java.math.BigDecimal;
import java.util.Date;

/**
 * Created by jiang.qi on 2016/9/28.
 */
public class FundsEntity {

    private Integer fundsId;

    private Date date;

    private BigDecimal perPrice;

    private BigDecimal totalPrice;

    private BigDecimal dayRate;

    private String fundstype;

    public Integer getFundsId() {
        return fundsId;
    }

    public void setFundsId(Integer fundsId) {
        this.fundsId = fundsId;
    }

    public Date getDate() {
        return date;
    }

    public void setDate(Date date) {
        this.date = date;
    }

    public BigDecimal getPerPrice() {
        return perPrice;
    }

    public void setPerPrice(BigDecimal perPrice) {
        this.perPrice = perPrice;
    }

    public BigDecimal getTotalPrice() {
        return totalPrice;
    }

    public void setTotalPrice(BigDecimal totalPrice) {
        this.totalPrice = totalPrice;
    }

    public BigDecimal getDayRate() {
        return dayRate;
    }

    public void setDayRate(BigDecimal dayRate) {
        this.dayRate = dayRate;
    }

    public String getFundstype() {
        return fundstype;
    }

    public void setFundstype(String fundstype) {
        this.fundstype = fundstype;
    }

    @Override
    public String toString() {
        return "FundsEntity{" +
                "fundsId=" + fundsId +
                ", date=" + date +
                ", perPrice=" + perPrice +
                ", totalPrice=" + totalPrice +
                ", dayRate=" + dayRate +
                ", fundstype='" + fundstype + '\'' +
                '}';
    }
}
