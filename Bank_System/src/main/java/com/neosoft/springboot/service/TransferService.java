package com.neosoft.springboot.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.neosoft.springboot.model.TransferBean;
import com.neosoft.springboot.repository.TransferRepository;

@Service
public class TransferService {
	
	@Autowired
	private TransferRepository transferrepo;

	public void creditAmnt(int transfer_to, double newBalance) {
		 transferrepo.creditAmount(transfer_to, newBalance);
		
	}

	public List<TransferBean> findByCustomerId(int id) {
		
		return transferrepo.getTransferData(id);
	}

	

	

}
