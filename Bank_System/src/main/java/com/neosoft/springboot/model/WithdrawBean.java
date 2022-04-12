package com.neosoft.springboot.model;

import java.time.LocalDateTime;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;
import javax.validation.constraints.NotNull;

import org.hibernate.annotations.OnDelete;
import org.hibernate.annotations.OnDeleteAction;
import org.springframework.format.annotation.DateTimeFormat;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Entity
@AllArgsConstructor
@NoArgsConstructor
@Table(name = "withdraw_detail")
public class WithdrawBean {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int withdraw_id;
	
	
	@DateTimeFormat(pattern="dd-MM-yyyy HH:mm")
	private LocalDateTime withdrawed_at = LocalDateTime.now();
	
	@ManyToOne
	private CustomerBean customerBean;
	
	
	
	@NotNull(message = "Enter correct amount.")
	private double withdraw_amnt;
	
	private double availabel_balance;
	



}
