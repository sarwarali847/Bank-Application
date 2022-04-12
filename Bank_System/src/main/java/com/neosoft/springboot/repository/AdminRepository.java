package com.neosoft.springboot.repository;

import java.util.List;

import javax.validation.Valid;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.neosoft.springboot.model.AdminBean;



@Repository
public interface AdminRepository extends JpaRepository<AdminBean, Integer>{

	@Query("SELECT c FROM AdminBean c where c.email=:e AND c.password=:p")
	List<AdminBean> checkAdmin(@Param("e") String email, @Param("p") String password);

	@Query("SELECT c.admin_id FROM AdminBean c where c.email=:adminEmail AND c.password=:adminPassword")
	int find(@Valid String adminEmail, @Valid String adminPassword);

}
