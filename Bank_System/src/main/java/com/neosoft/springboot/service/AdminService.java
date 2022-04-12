package com.neosoft.springboot.service;

import java.util.List;
import java.util.Optional;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.neosoft.springboot.model.AdminBean;
import com.neosoft.springboot.repository.AdminRepository;



@Service
public class AdminService {
	
	@Autowired
	private AdminRepository adminrepo;
	
	
	public List<AdminBean> getAllAdmin(){
		return adminrepo.findAll();	
	}
	
	public Optional<AdminBean> getAdminById(int id) {
		// TODO Auto-generated method stub
		return adminrepo.findById(id);
	}
	
	public AdminBean update(AdminBean admin) {
		// TODO Auto-generated method stub
		return adminrepo.save(admin);
	}

	public List<AdminBean> checkCredntial(String email, String password) {
		
		return adminrepo.checkAdmin(email,password);
	}

	public int getIdByEmailPassword(@Valid String adminEmail, @Valid String adminPassword) {
		
		return adminrepo.find(adminEmail,adminPassword);
	}

	

}
