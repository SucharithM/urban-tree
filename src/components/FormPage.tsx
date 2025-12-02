"use client";

import { useForm } from "react-hook-form";
import { IntlProvider, FormattedMessage } from "react-intl";
import { useDispatch, useSelector } from "react-redux";

import { Form, FormField, FormItem, FormLabel, FormControl, FormMessage } from "./ui/form";
import { Input } from "./ui/input";
import { Card } from "./ui/card";

import messages_en from "../app/locales/en.json";
import messages_es from "../app/locales/es.json";
import axios from "axios";

export function FormPage() {
  const locale = useSelector((state) => state.locale.value);

  const messages = {
    en: messages_en,
    es: messages_es,
  };

  const form = useForm({
    defaultValues: {
      name: "",
      password: "",
      nodeId: "",
      treeName: "",
      csvFile: null,
    },
  });

  const onSubmit = async (data) => {
  try {
    const formData = new FormData();

    formData.append("name", data.name);
    formData.append("password", data.password);
    formData.append("nodeId", data.nodeId);
    formData.append("treeName", data.treeName);

    if (data.csvFile?.[0]) {
      formData.append("csv", data.csvFile[0]);
    }

    const response = await axios.post(
      "http://localhost:8000/upload-csv/",
      formData,
      {
        headers: {
          "Content-Type": "multipart/form-data",
          "Content-Disposition": "form-data; name=\"file\"; filename=\"witness_tree_raw_feed - HF Witness Tree.csv\""
        },
      }
    );
    console.log("Upload successful:", response.data);

  } catch (error) {
    console.error("Upload failed:", error);
  }
};

  return (
    <IntlProvider locale={locale} messages={messages[locale]}>
      <div className="min-h-screen bg-background flex items-center justify-center p-6">
        <Card className="max-w-7xl flex w-full p-8 border border-border shadow-lg">
          <h2 className="text-3xl mb-6 text-center">
            <FormattedMessage id="Upload Tree Data" defaultMessage="Upload Tree Data" />
          </h2>

          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">

              {/* Name */}
              <FormField
                control={form.control}
                name="name"
                rules={{ required: "Name is required" }}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel aria-label="Name input label">Name</FormLabel>
                    <FormControl>
                      <Input
                        aria-label="Enter your full name"
                        aria-required="true"
                        placeholder="Enter your name"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Password */}
              <FormField
                control={form.control}
                name="password"
                rules={{
                  required: "Password is required",
                  minLength: { value: 6, message: "Minimum 6 characters" },
                }}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel aria-label="Password input label">Password</FormLabel>
                    <FormControl>
                      <Input
                        type="password"
                        aria-label="Enter your password"
                        aria-required="true"
                        aria-description="Password must be at least 6 characters long"
                        placeholder="Minimum 6 characters"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Node ID */}
              <FormField
                control={form.control}
                name="nodeId"
                rules={{
                  required: "Node ID is required",
                  // pattern: { value: /^NODE-\d+$/, message: "Format: NODE-001" },
                }}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel aria-label="Node ID input label">Node ID</FormLabel>
                    <FormControl>
                      <Input
                        aria-label="Enter the node ID in format NODE-001"
                        aria-required="true"
                        placeholder="NODE-001"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Tree Name */}
              <FormField
                control={form.control}
                name="treeName"
                rules={{ required: "Tree Name is required" }}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel aria-label="Tree Name input label">Tree Name</FormLabel>
                    <FormControl>
                      <Input
                        aria-label="Enter the name of the tree"
                        aria-required="true"
                        placeholder="Oak Tree Alpha"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* CSV Upload */}
              <FormField
                control={form.control}
                name="csvFile"
                rules={{
                  required: "CSV file is required",
                  validate: (value) =>
                    value?.[0]?.name?.endsWith(".csv") || "Only CSV files are allowed",
                }}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel aria-label="CSV file upload label">CSV File Upload</FormLabel>
                    <FormControl>
                      <div
                        role="button"
                        tabIndex={0}
                        aria-label="Upload CSV file by clicking or dragging and dropping"
                        aria-required="true"
                        aria-description="Only .csv files are accepted"
                        className="border-2 border-dashed border-primary/40 rounded-lg p-6 text-center cursor-pointer
                          hover:bg-primary/5 transition focus:outline-none focus:ring-2 focus:ring-primary"
                        onKeyDown={(e) => {
                          if (e.key === "Enter" || e.key === " ") {
                            document.getElementById("csv-upload")?.click();
                          }
                        }}
                        onClick={() => {
                          document.getElementById("csv-upload")?.click();
                        }}
                      >
                        <input
                          type="file"
                          accept=".csv"
                          className="hidden"
                          id="csv-upload"
                          onChange={(e) => field.onChange(e.target.files)}
                          aria-hidden="true"
                        />
                        <label htmlFor="csv-upload" className="cursor-pointer block">
                          <p className="text-muted-foreground">Drag & Drop or Click to Upload CSV</p>
                        </label>
                      </div>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Submit Button */}
              <button
                type="submit"
                aria-label="Submit Upload Tree Data"
                className="w-full bg-primary text-primary-foreground py-2 rounded-md hover:bg-primary/90 transition mt-32"
              >
                Submit
              </button>
            </form>
          </Form>
        </Card>
      </div>
    </IntlProvider>
  );
}
