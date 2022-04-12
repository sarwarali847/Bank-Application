package com.neosoft.springboot.service;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.neosoft.springboot.model.CustomerBean;
import com.neosoft.springboot.repository.CustomerRepository;

@Service
public class CustomerService {
	
	
	@Autowired
	private CustomerRepository customerrepo;

	public Optional<CustomerBean> getCustomerById(int id) {
		
		return customerrepo.findById(id);
	}

	public CustomerBean update(CustomerBean customer) {
		return customerrepo.save(customer);
	}

	public void addBalance(int customerId, double balance_) {
		customerrepo.addBalance(customerId,balance_);
		
	}

	public double getBalance(int customerId) {
		return customerrepo.getBalanceId(customerId);
	}

	public void withdrawBalance(int customerId, double finalBalance) {
		customerrepo.withdrawBalance(customerId, finalBalance);
		
	}

	public void deductAmnt(int customerId, double a) {
		customerrepo.deductAmnt(customerId, a);
		
	}

	public List<CustomerBean> searchCustomer(String keyword) {
		
		if (keyword != null) {
            return customerrepo.searchCustomer(keyword);
        }
        
        else
		return customerrepo.findAll();
		
		
	}

	public List<CustomerBean> sortByFirstName() {
		 return customerrepo.findAll().stream().sorted((o1, o2) -> o1.getFirst_name().
					compareTo(o2.getFirst_name())).collect(Collectors.toList());
			
	}

	public List<CustomerBean> sortByDOB() {
		return customerrepo.findAll().stream().sorted((o1, o2) -> o1.getDob().
				compareTo(o2.getDob())).collect(Collectors.toList());
		
	}

	public List<CustomerBean> sortByEmail() {
		return customerrepo.findAll().stream().sorted((o1, o2) -> o1.getEmail().
				compareTo(o2.getEmail())).collect(Collectors.toList());
	}

	public List<CustomerBean> sortByCity() {
		return customerrepo.findAll().stream().sorted((o1, o2) -> o1.getCity().
				compareTo(o2.getCity())).collect(Collectors.toList());
	}

	public List<CustomerBean> sortByBalance() {
		return customerrepo.findAll().stream().sorted((o1, o2) -> ((int)o1.getBalance()-(int)o2.getBalance())).collect(Collectors.toList());
	}

	public List<CustomerBean> checkCredntial(String eml, String pass) {
		return customerrepo.getData(eml,pass);
	}

	public boolean findCustomerId(int transferToId) {
		
		 return customerrepo.findById(transferToId).isPresent();
		
	}

	

	

	

}
