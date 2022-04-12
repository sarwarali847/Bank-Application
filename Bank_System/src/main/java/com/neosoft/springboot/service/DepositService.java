package com.neosoft.springboot.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.neosoft.springboot.model.DepositBean;
import com.neosoft.springboot.repository.DepositRepository;

@Service
public class DepositService {
	
	@Autowired
	private DepositRepository depositrepo;

	
	public List<DepositBean> findByCustomerId(int id) {
		 return depositrepo.getHistory(id);
	}


	

}
