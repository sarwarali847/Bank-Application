package com.neosoft.springboot.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Lob;
import javax.persistence.Table;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;

import com.mysql.cj.jdbc.Blob;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Entity
@Builder
@AllArgsConstructor
@NoArgsConstructor
@Table(name = "admin_detail")
public class AdminBean {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int admin_id;

	
	@Column(name = "email",unique = true)
	private String email;
	
	
	@Column(name = "password")
	private String password;
	
	

	
	

	
}
