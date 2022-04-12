package com.neosoft.springboot.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Entity
@Builder
@AllArgsConstructor
@NoArgsConstructor
@Table(name = "bank_detail")
public class BankBean {
	
	@Id
	@Column(name = "bank_id")
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int bank_id;
	
	@NotNull
	@Size(max = 100)
	private String bank_name;
	
	@NotNull
	@Size(max = 65)
	private String branch;
	
	@NotNull
	@Size(max = 30)
	private String ifsc_code;
	
	@NotNull
	@Size(max = 200)
	private String description;


}
