package com.neosoft.springboot.model;

import java.util.Date;

import java.util.Random;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.Table;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;
import javax.validation.constraints.Max;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;

import org.hibernate.annotations.OnDelete;
import org.hibernate.annotations.OnDeleteAction;


import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Entity
@Builder
@AllArgsConstructor
@NoArgsConstructor
@Table(name = "customer_detail")
public class CustomerBean {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int customer_id;
	
	@ManyToOne
	@OnDelete(action = OnDeleteAction.CASCADE)
	private BankBean bankBean;
	
	@NotNull(message="Please enter SAVING or CURRENT.")
	private String account_type;
	
	@NotNull
	@Column(unique = true)
	private String account_no=getRandomNumberString();
	
	@NotNull
	private double balance;
	
	@NotNull
	private String first_name;
	
	@NotNull
	private String last_name;
	
	@NotNull
	@Column(unique = true)
	private String email;
	
	@NotNull
	private String password;
	
	@NotNull
	@Size(max = 12)
	@Column(unique = true)
	private String adhar;
	
	@NotNull
	@Size(max = 10)
	@Column(unique = true)
	private String pan;
	
	@Size(max = 10)
	@Column(unique = true)
	@NotNull(message = "Enter 10 digit phone no.")
	private String phoneno;
	
	@NotNull(message = "Enter in YYYY-MM-DD format")
	@Temporal(TemporalType.DATE)
	private Date dob;
	
	@NotNull
	private String city;
	
	@NotNull
	private String state;
	
	
	
	
	
	
	
	



public static String getRandomNumberString() {
    // It will generate 6 digit random Number.
    // from 0 to 999999
    Random rnd = new Random();
    int number = rnd.nextInt(999999);

    // this will convert any number sequence into 6 character.
    return String.format("%06d", number);
}

}
