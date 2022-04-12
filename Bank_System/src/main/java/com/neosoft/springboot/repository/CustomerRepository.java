package com.neosoft.springboot.repository;

import java.util.List;
import java.util.Optional;

import javax.transaction.Transactional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.neosoft.springboot.model.CustomerBean;


@Repository
public interface CustomerRepository extends JpaRepository<CustomerBean, Integer> {

	@Transactional
	@Modifying
	@Query("UPDATE CustomerBean c set c.balance=:b where c.customer_id=:customerId")
	void addBalance(int customerId, @Param("b") double balance);

	

	@Query("SELECT c.balance from CustomerBean c where c.customer_id=:customerId")
	double getBalanceId(int customerId);


	@Transactional
	@Modifying
	@Query("UPDATE CustomerBean c set c.balance=:finalBalance where c.customer_id=:customerId")
	void withdrawBalance(int customerId, double finalBalance);



	@Transactional
	@Modifying
	@Query("UPDATE CustomerBean c set c.balance=:a where c.customer_id=:customerId")
	void deductAmnt(int customerId, double a);



	@Transactional
	@Modifying
	@Query("SELECT p FROM CustomerBean p WHERE p.first_name LIKE %?1% or p.last_name LIKE %?1% or p.email LIKE %?1% or p.password LIKE %?1% or p.account_type LIKE %?1% or p.password LIKE %?1% or p.city LIKE %?1% or p.password LIKE %?1% or p.state LIKE %?1% or p.password LIKE %?1% or p.account_no LIKE %?1%  or p.customer_id LIKE %?1% or p.balance LIKE %?1% or p.phoneno LIKE %?1% or p.bankBean.bank_id LIKE %?1% ")
	List<CustomerBean> searchCustomer(String keyword);


    @Query("SELECT c FROM CustomerBean c WHERE c.email=:eml AND c.password=:pass")
	List<CustomerBean> getData(String eml, String pass);



    @Query("SELECT c FROM CustomerBean c WHERE c.email=:e")
	List<CustomerBean> findCustomerByEmail(@Param("e") String email);


    
    @Query("SELECT c.customer_id FROM CustomerBean c where c.email=:eml")
	int findIdByEmail(@Param("eml") String email);




}
