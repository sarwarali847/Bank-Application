package com.neosoft.springboot.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.neosoft.springboot.model.DepositBean;

@Repository
public interface DepositRepository extends JpaRepository<DepositBean, Integer>{

	
	
	@Query("SELECT d from DepositBean d where d.customerBean.customer_id=:id order by d.deposited_at DESC")
	List<DepositBean> getHistory(int id);

	

}
