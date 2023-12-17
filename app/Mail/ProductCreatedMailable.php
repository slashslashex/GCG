<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Mail\Mailable;
use Illuminate\Mail\Mailables\Content;
use Illuminate\Mail\Mailables\Envelope;
use Illuminate\Queue\SerializesModels;

class ProductCreatedMailable extends Mailable
{
    use Queueable, SerializesModels;

    protected $product;

    /**
     * Create a new message instance.
     */
    public function __construct($product)
    {
        $this->product = $product;
    }

    /**
     * Get the message envelope.
     */
    public function envelope(): Envelope
    {
        return new Envelope(
            subject: '123',
        );
    }

    /**
     * Get the message content definition.
     */
    public function content(): Content
    {
        $raw = json_encode($this->product); // Преобразование Proxy Array в JSON строку
        $product = json_decode($raw); // Преобразование JSON строки в обычный объект

        return new Content(
            markdown: 'mail.created',
            with: ['product'=>$product]
        );
    }

    /**
     * Get the attachments for the message.
     *
     * @return array<int, \Illuminate\Mail\Mailables\Attachment>
     */
    public function attachments(): array
    {
        return [];
    }
}
