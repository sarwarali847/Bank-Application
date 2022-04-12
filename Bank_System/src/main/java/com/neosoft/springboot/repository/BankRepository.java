package com.neosoft.springboot.repository;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.neosoft.springboot.model.BankBean;

@Repository
public interface BankRepository extends JpaRepository<BankBean, Integer> {

	
	
	@Transactional
	@Modifying
	@Query("SELECT p FROM BankBean p WHERE p.bank_name LIKE %?1% or p.branch LIKE %?1% or p.description LIKE %?1% or p.ifsc_code LIKE %?1% or p.bank_id LIKE %?1%")
	List<BankBean> searchBank(String keyword);

}
