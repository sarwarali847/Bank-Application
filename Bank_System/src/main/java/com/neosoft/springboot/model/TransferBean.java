package com.neosoft.springboot.model;

import java.time.LocalDateTime;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;
import javax.validation.constraints.NotNull;

import org.springframework.format.annotation.DateTimeFormat;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Entity
@AllArgsConstructor
@NoArgsConstructor
@Table(name = "transfer_detail")
public class TransferBean {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int transfer_id;
	
	
	@DateTimeFormat(pattern="dd-MM-yyyy HH:mm")
	private LocalDateTime transfered_at = LocalDateTime.now();
	
	@ManyToOne
	private CustomerBean customerBean;
	
	@NotNull
	private int transfer_amnt_to;
	
	
	@NotNull(message = "Enter correct amount.")
	private double transfer_amnt;
	
	private double availabel_balance;
	


}
