package com.neosoft.springboot.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.neosoft.springboot.model.AdminBean;
import com.neosoft.springboot.model.BankBean;
import com.neosoft.springboot.model.CustomerBean;
import com.neosoft.springboot.repository.BankRepository;

@Service
public class BankService {
	
	@Autowired
	private BankRepository bankrepo;

	public Optional<BankBean> getBankById(int id) {
		
		return bankrepo.findById(id);
	}
	
	public BankBean update(BankBean bank) {
		return bankrepo.save(bank);
	}

	public List<BankBean> searchBank(String keyword) {
		if (keyword != null) {
            return bankrepo.searchBank(keyword);
        }
        
        else
		return bankrepo.findAll();
		
	}
	
	

}
