"use client";
import React from "react";
import { FaEye, FaTrash, FaLock, FaUnlock } from "react-icons/fa";

export default function ATMCardList({ cards = [], onView, onBlock, onUnblock, onDelete }) {
  if (!cards.length) {
    return (
      <div className="w-full py-10 text-center text-gray-500">No ATM cards found.</div>
    );
  }
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
      {cards.map((card, i) => (
        <div key={card._id || i} className="bg-white rounded-xl shadow p-6 flex flex-col gap-3 border border-gray-100">
          <div className="flex justify-between items-center">
            <span className="font-bold text-lg text-rose-700">{card.card_type} Card</span>
            <span className="text-xs text-gray-400">Exp: {new Date(card.expiry).toLocaleDateString()}</span>
          </div>
          <div className="font-mono text-xl tracking-widest text-gray-800">{card.card_no}</div>
          <div className="flex gap-2 mt-2">
            <button title="View Details" onClick={() => onView(card)} className="p-2 rounded bg-blue-100 text-blue-700 hover:bg-blue-200"><FaEye /></button>
            {card.isBlocked ? (
              <button title="Unblock Card" onClick={() => onUnblock(card)} className="p-2 rounded bg-green-100 text-green-700 hover:bg-green-200"><FaUnlock /></button>
            ) : (
              <button title="Block Card" onClick={() => onBlock(card)} className="p-2 rounded bg-yellow-100 text-yellow-700 hover:bg-yellow-200"><FaLock /></button>
            )}
            <button title="Delete Card" onClick={() => onDelete(card)} className="p-2 rounded bg-red-100 text-red-700 hover:bg-red-200"><FaTrash /></button>
          </div>
        </div>
      ))}
    </div>
  );
}
