package com.neosoft.springboot.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import com.neosoft.springboot.model.TransferBean;
import com.neosoft.springboot.repository.CustomerRepository;
import com.neosoft.springboot.repository.TransferRepository;
import com.neosoft.springboot.service.CustomerService;
import com.neosoft.springboot.service.InvalidRequestException;
import com.neosoft.springboot.service.TransferService;
@CrossOrigin(origins="http://localhost:4200/")
@RestController
public class TransferController {
	
	@Autowired
	private CustomerRepository customerrepo;
	
	@Autowired
	private CustomerService customerservice;
	
	@Autowired
	private TransferRepository transferrepo;
	
	@Autowired
	private TransferService transferservice;
	
	
	@PutMapping("/transferBalance/{customerId}")
	public TransferBean transferBalance(@PathVariable int customerId,@RequestBody TransferBean transfer)
	{
		int transferToId = transfer.getTransfer_amnt_to();
		int fromAccnt = transfer.getCustomerBean().getCustomer_id();
		if(customerrepo.findById(fromAccnt).isPresent() && customerrepo.findById(transferToId).isPresent()) {
			double t = transfer.getTransfer_amnt();
			double a = customerservice.getBalance(customerId);
			if(t>a || t<0 ||t==0)
			{
				throw new InvalidRequestException("Entered Balance is greater than available balance !");	
			}
			
			double deductBalance = a-t;
			transfer.setAvailabel_balance(deductBalance);
			customerservice.deductAmnt(customerId, deductBalance);

			int transfer_to = transfer.getTransfer_amnt_to();
			double getCurrent = customerservice.getBalance(transfer_to);
			double newBalance = getCurrent + t;
			transferservice.creditAmnt(transfer_to, newBalance);
		}
		else
			throw new InvalidRequestException("Please Try Again !!");	
			
		
		return transferrepo.save(transfer);
		
	}
	
	
	
	@GetMapping("/getTransferHistoryByCustomerId/{id}")
	public List<TransferBean> getTransferHistoryByCustomerId(@PathVariable int id) {
		return transferservice.findByCustomerId(id);
	}
	
	
	

}
