package com.anuhya.portfolio.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.anuhya.portfolio.model.ContactMessage;

public interface ContactRepository
        extends JpaRepository<ContactMessage, Long> {
}