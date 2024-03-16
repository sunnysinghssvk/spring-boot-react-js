package com.spring.backend.repository;

import com.spring.backend.entity.Developer;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface DeveloperRepo extends JpaRepository<Developer, Long> {
}
