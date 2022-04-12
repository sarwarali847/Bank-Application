package com.neosoft.springboot.controller;


import java.util.List;
import java.util.Optional;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import com.neosoft.springboot.model.BankBean;
import com.neosoft.springboot.myexception.ResourceNotFoundException;
import com.neosoft.springboot.repository.BankRepository;
import com.neosoft.springboot.service.BankService;
import com.neosoft.springboot.service.InvalidRequestException;
@CrossOrigin(origins="http://localhost:4200/")
@RestController
public class BankController {
	
	@Autowired
	private BankRepository bankrepo;
	
	@Autowired
	private BankService bankservice;
	
	
	@PostMapping("/addBank")
	public BankBean addBank(@Valid @RequestBody BankBean bank)
	{
		return bankrepo.save(bank);
	}
	
	@GetMapping("/getBank")
	public List<BankBean> getAllBank(){
		return bankrepo.findAll();
		
	}
	
	@GetMapping("/getBank/{id}")
	public Optional<BankBean> getBankById(@PathVariable int id){
		return bankrepo.findById(id);
	}
	
	 @DeleteMapping("/bank/{bankId}")
		public void deleteBank(@PathVariable Integer bankId) {
			bankrepo.findById(bankId).map(bank -> {
				bankrepo.delete(bank);
				return bank;
			}).orElseThrow(() -> new ResourceNotFoundException("admin", "admin_id", bankId));
		}
	
	

		@PutMapping("/update/bank/{id}")
		public BankBean updateInfo(@RequestBody BankBean bank, @PathVariable int id) {
			if(bankservice.getBankById(id).isPresent()) {
				bank.setBank_id(id);
				return bankservice.update(bank);
			}
			else {
				throw new InvalidRequestException("Customer with ID " + 
	        			bank.getBank_id() + " does not exist.");
			}	
		}
		
		
		@GetMapping("/searchBank/{keyword}")
		public List<BankBean> searchCustomer(@PathVariable String keyword)
		{
			return bankservice.searchBank(keyword);
		}


}
