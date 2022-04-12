package com.neosoft.springboot.controller;

import java.io.ByteArrayOutputStream;
import java.io.IOException;
import java.net.URI;
import java.nio.file.Files;
import java.nio.file.Paths;
import java.util.List;
import java.util.Optional;
import java.util.zip.Deflater;

import javax.validation.Valid;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.neosoft.springboot.model.*;
import com.neosoft.springboot.model.AdminBean;
import com.neosoft.springboot.service.*;
import com.neosoft.springboot.model.CustomerBean;
import com.neosoft.springboot.myexception.ResourceNotFoundException;
import com.neosoft.springboot.repository.AdminRepository;


import com.neosoft.springboot.service.AdminService;
import com.neosoft.springboot.service.InvalidRequestException;


@CrossOrigin(origins="http://localhost:4200/")
@RestController
public class AdminController {
	
	@Autowired
	private AdminRepository adminrepo;

	@Autowired
	private AdminService adminservice;
	
	//Add admin
		@PostMapping("/addAdmin")
		public AdminBean addAdmin(@Valid @RequestBody AdminBean admin
				) 
		{
			return adminrepo.save(admin);
			
		}
		

	//Get admin
		@GetMapping("/getAdmin")
		public List<AdminBean> getAllAdmin(){
			return adminrepo.findAll();
			
		}
		
		@GetMapping("/getAdmin/{id}")
		public Optional<AdminBean> getAdminById(@PathVariable int id){
			return adminrepo.findById(id);
		}
		
		
		//Delete Admin
		 @DeleteMapping("/admin/{adminId}")
			public void deleteAdmin(@PathVariable Integer adminId) {
				adminrepo.findById(adminId).map(admin -> {
					adminrepo.delete(admin);
					return admin;
				}).orElseThrow(() -> new ResourceNotFoundException("admin", "admin_id", adminId));
			}
		
		

		 //Update
			@PutMapping("/update/admin/{id}")
			public AdminBean updateInfo(@RequestBody AdminBean admin , @PathVariable int id) {
				if(adminservice.getAdminById(id).isPresent()) {
					admin.setAdmin_id(id);
					return adminservice.update(admin);
				}
				else {
					throw new InvalidRequestException("User with ID " + 
		        			admin.getAdmin_id() + " does not exist.");
				}	
			}
			
			
			//Login
			@PostMapping("/adminLogin")
			public void getAdminData(@RequestBody AdminBean admin){
			   
				System.out.println(admin);
				
				
								
			}
		
	
	

}
