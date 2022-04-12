package com.neosoft.springboot.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import com.neosoft.springboot.model.WithdrawBean;

@Repository
public interface WithdrawRepository extends JpaRepository<WithdrawBean, Integer>{

	
	@Query("SELECT w FROM WithdrawBean w where w.customerBean.customer_id=:id order by withdrawed_at DESC")
	List<WithdrawBean> findByCustomerId(int id);

}
