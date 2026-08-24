package com.anuhya.portfolio.service;

import com.anuhya.portfolio.model.ContactMessage;
import com.anuhya.portfolio.repository.ContactRepository;
import org.springframework.stereotype.Service;

@Service
public class ContactService {

    private final ContactRepository contactRepository;
    private final EmailService emailService;

    public ContactService(
            ContactRepository contactRepository,
            EmailService emailService) {

        this.contactRepository = contactRepository;
        this.emailService = emailService;
    }

    public ContactMessage saveMessage(ContactMessage message) {

        ContactMessage savedMessage =
                contactRepository.save(message);

        emailService.sendContactNotification(savedMessage);

        return savedMessage;
    }
}