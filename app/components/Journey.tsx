"use client";

import { useState } from "react";
import Image, { ImageProps } from "next/image";
import Freelancer from "../../assets/freelancer.svg";
import ClientImg from "../../assets/client.svg";
import { motion, AnimatePresence } from "framer-motion";

type PathType = {
  image: ImageProps["src"];
  title: string;
  steps: string[];
  color: string;
};

const PATHS: Record<string, PathType> = {
  Freelancer: {
    image: Freelancer,
    title: "As a freelancer, your journey unfolds like this:",
    steps: [
      "Link your wallet to securely manage your transactions.",
      "Create a compelling resume that showcases your skills.",
      "Add your contact information to stay connected.",
      "Apply for tasks that match your expertise.",
      "Get selected by clients who appreciate your talent.",
      "Complete the task with excellence.",
      "Receive your well-earned reward.",
    ],
    color: "bg-blue-600",
  },
  Client: {
    image: ClientImg,
    title: "As a client, your journey is smooth and secure:",
    steps: [
      "Link your wallet for seamless payments.",
      "Add your contact information for clear communication.",
      "Create a task with detailed requirements.",
      "Select your preferred freelancer (an escrow smart contract is created under the hood).",
      "Wait for task completion with confidence.",
      "Review and make payment upon successful delivery.",
    ],
    color: "bg-green-600",
  },
};

// Добавляем типы для пропсов компонентов
interface TabButtonProps {
  label: string;
  isActive: boolean;
  color: string;
  onClick: () => void;
}

const TabButton = ({ label, isActive, color, onClick }: TabButtonProps) => (
  <motion.button
    className={`px-6 py-3 rounded-xl text-white font-semibold shadow-lg transition-colors ${isActive ? color : "bg-gray-600 text-gray-300"
      }`}
    onClick={onClick}
    whileTap={{ scale: 0.95 }}
    whileHover={{ scale: 1.05 }}
    aria-label={`Select ${label} path`}
    role="tab"
    aria-selected={isActive}
  >
    {label}
  </motion.button>
);

interface StepListProps {
  steps: string[];
}

const StepList = ({ steps }: StepListProps) => (
  <ol className="mt-4 space-y-2 text-gray-300 list-decimal list-inside">
    {steps.map((step, index) => (
      <li key={index} className="ml-4">
        {step}
      </li>
    ))}
  </ol>
);

export default function Journey() {
  const [activeTab, setActiveTab] = useState<keyof typeof PATHS>("Freelancer");

  const { image, title, steps } = PATHS[activeTab];

  return (
    <section className="w-full py-24 bg-[#111] text-gray-200 flex flex-col items-center px-4 shadow-inner">
      <h3 className="text-4xl font-bold text-blue-400 mb-12">Choose Your Path</h3>

      <div className="flex gap-6 mb-12" role="tablist">
        {Object.keys(PATHS).map((key) => (
          <TabButton
            key={key}
            label={key}
            isActive={activeTab === key}
            color={PATHS[key].color}
            onClick={() => setActiveTab(key as keyof typeof PATHS)}
          />
        ))}
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.2 }}
          className="flex flex-col items-center"
        >
          <div className="flex gap-24 w-full items-center justify-between">
            <div className="w-[250px] h-[250px] flex-1 flex items-center justify-center">
              <Image
                src={image}
                alt={`${activeTab} illustration`}
                width={250}
                quality={100}
                priority
              />
            </div>

            <div className="flex-1 min-h-[250px] flex flex-col justify-between">
              <p className="mt-6 text-lg font-medium">{title}</p>
              <StepList steps={steps} />
            </div>
          </div>

        </motion.div>
      </AnimatePresence>
    </section>
  );
}