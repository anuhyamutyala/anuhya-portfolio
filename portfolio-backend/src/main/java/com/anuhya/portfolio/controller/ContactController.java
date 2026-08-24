package com.anuhya.portfolio.controller;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.anuhya.portfolio.model.ContactMessage;
import com.anuhya.portfolio.service.ContactService;

import jakarta.validation.Valid;

@RestController
@RequestMapping("/api/contact")
public class ContactController {

    private final ContactService contactService;

    public ContactController(ContactService contactService) {
        this.contactService = contactService;
    }

    @PostMapping
    public ResponseEntity<ContactMessage> submitContactForm(
            @Valid @RequestBody ContactMessage message) {

        ContactMessage savedMessage =
                contactService.saveMessage(message);

        return ResponseEntity
                .status(HttpStatus.CREATED)
                .body(savedMessage);
    }
}