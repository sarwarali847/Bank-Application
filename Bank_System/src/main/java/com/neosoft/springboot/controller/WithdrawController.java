package com.neosoft.springboot.controller;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import com.neosoft.springboot.model.WithdrawBean;
import com.neosoft.springboot.repository.CustomerRepository;
import com.neosoft.springboot.repository.WithdrawRepository;
import com.neosoft.springboot.service.CustomerService;
import com.neosoft.springboot.service.InvalidRequestException;
import com.neosoft.springboot.service.WithdrawService;
@CrossOrigin(origins="http://localhost:4200/")
@RestController
public class WithdrawController {
	
	@Autowired
	private CustomerRepository customerrepo;
	
	@Autowired
	private WithdrawRepository withdrawrepo;
	
	@Autowired
	private CustomerService customerservice;
	
	@Autowired
	private WithdrawService withdrawservice;
	
	
	@PutMapping("/withdrawBalance/{customerId}")
	public WithdrawBean withdrawBalance(@PathVariable int customerId,@RequestBody WithdrawBean withdraw) {
		
		if(customerrepo.findById(customerId).isPresent()) {
        double current_balance = customerservice.getBalance(customerId);
       // System.out.println("Current balance: "+current_balance);
        double newBalance = withdraw.getWithdraw_amnt();
        if(newBalance>current_balance || newBalance==0)
        {
        	throw new InvalidRequestException("Entered Balance is greater than available balance !");	
        }
        //System.out.println("deposit balance: "+newBalance);
        double finalBalance = current_balance - newBalance;
        withdraw.setAvailabel_balance(finalBalance);
		customerservice.withdrawBalance(customerId, finalBalance);
        return withdrawrepo.save(withdraw);
		}
		else {
			throw new InvalidRequestException("Customer with ID " + 
        			customerId + " does not exist.");
		}	
		
	}
	
	
	@GetMapping("/getWithdrawHistoryByCustomerId/{id}")
	public List<WithdrawBean> getWithdrawHistoryByCustomerId(@PathVariable int id) {
		return withdrawrepo.findByCustomerId(id);
	}

	
	
	
	
	

}
