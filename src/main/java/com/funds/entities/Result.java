package com.funds.entities;

/**
 * webservice返回数据
 * @author 蔡志同
 */
public class Result {

	@Override
	public String toString() {
		return "ResultVO [success=" + success + ", errCode=" + errCode
				+ ", resData=" + resData + "]";
	}
	/** 结果码【0：成功  1：失败】*/
	private boolean success;
	/** 错误码 */
	private String errCode;
	/** 返回的结果数据 */
	private String resData;
	
	/**
	 * 成功时调用
	 */
	public Result() {
		this.success = true;
	}
	
	/**
	 * 出错时调用
	 */
	public Result(String errCode) {
		super();
		this.success = false;
		this.errCode = errCode;
	}

	public String getErrCode() {
		return errCode;
	}
	public void setErrCode(String errCode) {
		this.errCode = errCode;
	}
	public String getResData() {
		return resData;
	}
	public void setResData(String resData) {
		this.resData = resData;
	}
	public boolean isSuccess() {
		return success;
	}
	public void setSuccess(boolean success) {
		this.success = success;
	}
}
