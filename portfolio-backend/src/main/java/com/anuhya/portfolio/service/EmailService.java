package com.anuhya.portfolio.service;

import com.anuhya.portfolio.model.ContactMessage;
import com.resend.Resend;
import com.resend.services.emails.model.SendEmailRequest;
import com.resend.services.emails.model.SendEmailResponse;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

@Service
public class EmailService {

    private final Resend resend;

    @Value("${portfolio.notification.email}")
    private String notificationEmail;

    public EmailService(
            @Value("${resend.api.key}") String apiKey) {

        this.resend = new Resend(apiKey);
    }

    public void sendContactNotification(ContactMessage contactMessage) {

        System.out.println("Attempting to send Resend email...");

        SendEmailRequest request =
                SendEmailRequest.builder()
                        .from("Portfolio <onboarding@resend.dev>")
                        .to(notificationEmail)
                        .subject(
                                "New Portfolio Message from "
                                + contactMessage.getName()
                        )
                        .html(
                                "<h2>New Portfolio Message</h2>" +
                                "<p><b>Name:</b> "
                                + contactMessage.getName() +
                                "</p>" +
                                "<p><b>Email:</b> "
                                + contactMessage.getEmail() +
                                "</p>" +
                                "<p><b>Message:</b> "
                                + contactMessage.getMessage() +
                                "</p>"
                        )
                        .build();

        SendEmailResponse response =
                resend.emails().send(request);

        System.out.println(
                "Resend email sent. ID: " + response.getId()
        );
    }
}