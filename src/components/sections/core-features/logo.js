'use client';
import Link from "next/link";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";

export default function Logo() {
  return (
    <Link href="/" className="flex items-center gap-2">
      <div className="bg-[#2563EB] p-2 rounded-lg">
        <AccountBalanceIcon style={{ color: "white", fontSize: 28 }} />
      </div>

      <div className="flex flex-col leading-tight">
        <span className="text-xl font-bold text-[#2563EB]">
          ONE CART
        </span>
        <span className="text-[10px] tracking-[2px] text-gray-500">
          FINANCIAL SERVICES
        </span>
      </div>
    </Link>
  );
}