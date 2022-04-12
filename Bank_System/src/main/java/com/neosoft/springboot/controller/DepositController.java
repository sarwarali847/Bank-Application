package com.neosoft.springboot.controller;


import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.neosoft.springboot.model.CustomerBean;
import com.neosoft.springboot.model.DepositBean;
import com.neosoft.springboot.repository.CustomerRepository;
import com.neosoft.springboot.repository.DepositRepository;
import com.neosoft.springboot.service.CustomerService;
import com.neosoft.springboot.service.DepositService;
import com.neosoft.springboot.service.InvalidRequestException;
@CrossOrigin(origins="http://localhost:4200/")
@RestController
public class DepositController {
	
	@Autowired
	private CustomerRepository customerrepo;
	
	@Autowired
	private DepositRepository depositrepo;
	
	@Autowired
	private DepositService depositservice;
	
	@Autowired
	private CustomerService customerservice;
	
	@PutMapping("/addBalance/{customerId}")
	public DepositBean addBalance(@PathVariable int customerId,@RequestBody DepositBean deposit) {
		
		if(customerrepo.findById(customerId).isPresent()) {
			
		System.out.println(deposit.getCustomerBean().getCustomer_id());
		//deposit.setCustomerBean(deposit.customerBean.setCustomer_id(customerId));
		//deposit.setCustomer_id(customerId);
        double current_balance = customerservice.getBalance(customerId);
       // System.out.println("Current balance: "+current_balance);
        double newBalance = deposit.getDeposit_amnt();
        if(newBalance<0 || newBalance==0)
		{
			throw new InvalidRequestException("Entered Balance Aagin!");	
		}
        //System.out.println("deposit balance: "+newBalance);
        double finalBalance = current_balance + newBalance;
        deposit.setAvailabel_balance(finalBalance);
		customerservice.addBalance(customerId, finalBalance);
        return depositrepo.save(deposit);
		}
		else {
			throw new InvalidRequestException("Customer with ID " + 
        			customerId + " does not exist.");
		}	
		
	}
	
	@GetMapping("/getDepositHistoryByCustomerId/{id}")
	public List<DepositBean> getDepositHistoryByCustomerId(@PathVariable int id) {
		return depositservice.findByCustomerId(id);
	}

}
