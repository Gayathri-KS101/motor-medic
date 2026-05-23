"use client";

import { useState } from "react";
import emailjs from "@emailjs/browser";
import { BookingService } from "@/app/hooks/useBooking";

interface BookingFormProps {
    service: BookingService;
    onSuccess?: () => void;
}

export const BookingForm = ({
    service,
    onSuccess,
}: BookingFormProps) => {
    const [loading, setLoading] = useState(false);

    const [formData, setFormData] = useState({
        name: "",
        phone: "",
        email: "",
        make: "",
        model: "",
        year: "",
        preferredDate: "",
        preferredTime: "",
        notes: "",
    });

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const sendBooking = async (e: React.FormEvent) => {
        e.preventDefault();

        try {
            setLoading(true);

            await emailjs.send(
                process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
                process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
                {
                    service_name: service.title,
                    customer_name: formData.name,
                    customer_phone: formData.phone,
                    customer_email: formData.email,
                    vehicle_make: formData.make,
                    vehicle_model: formData.model,
                    vehicle_year: formData.year,
                    preferred_date: formData.preferredDate,
                    preferred_time: formData.preferredTime,
                    submitted_at: new Date().toLocaleString(),

                    customer_notes:
                        formData.notes || "No additional notes provided.",
                },
                process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
            );

            alert("Booking request sent successfully.");

            setFormData({
                name: "",
                phone: "",
                email: "",
                make: "",
                model: "",
                year: "",
                preferredDate: "",
                preferredTime: "",
                notes: "",
            });

            onSuccess?.();
        } catch (error) {
            console.error(error);
            alert("Failed to send booking request.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <form
            onSubmit={sendBooking}
            className="space-y-5"
        >

            {/* SECTION */}
            <div>
                <p className="mb-3 text-xs uppercase tracking-[0.3em] text-white/40">
                    Customer Info
                </p>

                <div className="grid gap-4">
                    <input
                        type="text"
                        name="name"
                        placeholder="Full Name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="h-14 rounded-2xl border border-white/10 bg-white/[0.03] px-5 text-sm text-white outline-none transition focus:border-red-500"
                    />

                    <div className="grid gap-4 sm:grid-cols-2">
                        <input
                            type="tel"
                            name="phone"
                            placeholder="Phone Number"
                            required
                            value={formData.phone}
                            onChange={handleChange}
                            className="h-14 rounded-2xl border border-white/10 bg-white/[0.03] px-5 text-sm text-white outline-none transition focus:border-red-500"
                        />

                        <input
                            type="email"
                            name="email"
                            placeholder="Email Address"
                            required
                            value={formData.email}
                            onChange={handleChange}
                            className="h-14 rounded-2xl border border-white/10 bg-white/[0.03] px-5 text-sm text-white outline-none transition focus:border-red-500"
                        />
                    </div>
                </div>
            </div>

            {/* VEHICLE */}
            <div>
                <p className="mb-3 text-xs uppercase tracking-[0.3em] text-white/40">
                    Vehicle Info
                </p>

                <div className="grid gap-4 sm:grid-cols-3">
                    <input
                        type="text"
                        name="make"
                        placeholder="Make"
                        required
                        value={formData.make}
                        onChange={handleChange}
                        className="h-14 rounded-2xl border border-white/10 bg-white/[0.03] px-5 text-sm text-white outline-none transition focus:border-red-500"
                    />

                    <input
                        type="text"
                        name="model"
                        placeholder="Model"
                        required
                        value={formData.model}
                        onChange={handleChange}
                        className="h-14 rounded-2xl border border-white/10 bg-white/[0.03] px-5 text-sm text-white outline-none transition focus:border-red-500"
                    />

                    <input
                        type="text"
                        name="year"
                        placeholder="Year"
                        value={formData.year}
                        onChange={handleChange}
                        className="h-14 rounded-2xl border border-white/10 bg-white/[0.03] px-5 text-sm text-white outline-none transition focus:border-red-500"
                    />
                </div>
            </div>

            {/* DATE */}
            <div>
                <p className="mb-3 text-xs uppercase tracking-[0.3em] text-white/40">
                    Booking Preference
                </p>

                <div className="grid gap-4 sm:grid-cols-2">
                    <input
                        type="date"
                        name="preferredDate"
                        required
                        value={formData.preferredDate}
                        onChange={handleChange}
                        className="h-14 rounded-2xl border border-white/10 bg-white/[0.03] px-5 text-sm text-white outline-none transition focus:border-red-500"
                    />

                    <input
                        type="time"
                        name="preferredTime"
                        required
                        value={formData.preferredTime}
                        onChange={handleChange}
                        className="h-14 rounded-2xl border border-white/10 bg-white/[0.03] px-5 text-sm text-white outline-none transition focus:border-red-500"
                    />
                </div>
            </div>

            {/* NOTES */}
            <div>
                <textarea
                    name="notes"
                    placeholder="Describe the issue or additional notes..."
                    rows={4}
                    value={formData.notes}
                    onChange={handleChange}
                    className="w-full rounded-2xl border border-white/10 bg-white/[0.03] p-5 text-sm text-white outline-none transition focus:border-red-500"
                />
            </div>

            {/* BUTTON */}
            <button
                type="submit"
                disabled={loading}
                className="flex h-14 w-full items-center justify-center rounded-2xl bg-red-600 text-sm font-semibold uppercase tracking-[0.2em] text-white transition hover:bg-red-500 disabled:opacity-50"
            >
                {loading ? "Sending..." : `Book ${service.title}`}
            </button>

        </form>
    );
};