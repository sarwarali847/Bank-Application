package com.neosoft.springboot.controller;

import java.util.List;
import java.util.Optional;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.neosoft.springboot.service.*;
import com.neosoft.springboot.model.*;
import com.neosoft.springboot.model.AdminBean;
import com.neosoft.springboot.model.CustomerBean;
import com.neosoft.springboot.myexception.ResourceNotFoundException;
import com.neosoft.springboot.repository.CustomerRepository;

import com.neosoft.springboot.service.CustomerService;
import com.neosoft.springboot.service.InvalidRequestException;
@CrossOrigin(origins="http://localhost:4200/")
@RestController
public class CustomerController {
	
	@Autowired
	private CustomerRepository customerrepo;
	
	@Autowired
	private CustomerService customerservice;
	


	

	@PostMapping("/addCustomer")
	public CustomerBean addCustomer(@Valid @RequestBody CustomerBean customer)
	{
		return customerrepo.save(customer);
	}
	
	@GetMapping("/getCustomer")
	public List<CustomerBean> getAllCustomer(){
		return customerrepo.findAll();
		
	}
	
	@GetMapping("/getCustomerByEmail/{email}")
	public List<CustomerBean> getAllCustomerByEmail(@Valid @PathVariable String email){
		return customerrepo.findCustomerByEmail(email);
		
	}
	
	@GetMapping("/getCustomerId/{email}")
	public int getCustomerId(@PathVariable String email) {
		return customerrepo.findIdByEmail(email);
	}
	
	@GetMapping("/getCustomer/{id}")
	public Optional<CustomerBean> getAdminById(@PathVariable int id){
		return customerrepo.findById(id);
	}
	
	@DeleteMapping("/customer/{customerId}")
	public void deleteCustomer(@PathVariable Integer customerId) {
		customerrepo.findById(customerId).map(customer -> {
			customerrepo.delete(customer);
			return customer;
		}).orElseThrow(() -> new ResourceNotFoundException("customer", "customer_id", customerId));
	}



	@PutMapping("/update/customer/{id}")
	public CustomerBean updateInfo(@RequestBody CustomerBean customer , @PathVariable int id) {
		if(customerservice.getCustomerById(id).isPresent()) {
			customer.setCustomer_id(id);
			return customerservice.update(customer);
		}
		else {
			throw new InvalidRequestException("User with ID " + 
        			customer.getCustomer_id() + " does not exist.");
		}	
	}
	
	@GetMapping("/searchCustomer/{keyword}")
	public List<CustomerBean> searchCustomer(@PathVariable String keyword)
	{
		return customerservice.searchCustomer(keyword);
	}
	
	@GetMapping("/sortByFirstName")
	public List<CustomerBean> sortFirstName(CustomerBean customerBean){
		return customerservice.sortByFirstName();
	}
	
	@GetMapping("/sortByDOB")
	public List<CustomerBean> sortByDob(CustomerBean customerBean){
		return customerservice.sortByDOB();
	}
	
	@GetMapping("/sortByEmail")
	public List<CustomerBean> sortByEmail(CustomerBean customerBean){
		return customerservice.sortByEmail();
	}
	@GetMapping("/sortByCity")
	public List<CustomerBean> sortByCity(CustomerBean customerBean){
		return customerservice.sortByCity();
	}
	@GetMapping("/sortByBalance")
	public List<CustomerBean> sortByBalance(CustomerBean customerBean){
		return customerservice.sortByBalance();
	}
	
	@GetMapping("/customerLogin/{email}/{password}")
	public List<CustomerBean> getCustomerData(@PathVariable String email, @PathVariable String password){
	return customerservice.checkCredntial(email,password);					
	}
	
	
	



}
