package com.neosoft.springboot.repository;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.neosoft.springboot.model.TransferBean;


@Repository
public interface TransferRepository extends JpaRepository<TransferBean, Integer>{

	
	
	@Transactional
	@Modifying
	@Query("UPDATE CustomerBean c set c.balance=:newBalance where c.customer_id=:transfer_to")
	void creditAmount(int transfer_to, double newBalance);

	@Query("SELECT t FROM TransferBean t where t.customerBean.customer_id=:id order by transfered_at DESC")
	List<TransferBean> getTransferData(int id);

	

}
