import React from "react";

export const FirstFlowView = ({ register, onSubmit, errors }) => {
  // MOVE ALL LOGIC TO CONTAINER, VIEW COMPONENTS ONLY RENDER THE UI
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "start",
        marginTop: 64,
      }}
    >
      <form
        onSubmit={onSubmit}
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "start",
          gap: "24px",
          backgroundColor: "#1C5D99",
          padding: 32,
        }}
      >
        <div>
          <label>Nume</label>
          <input {...register("name")} />
          {errors.name && <p style={{ color: "red" }}>{errors.name.message}</p>}
        </div>
        {/* SOLUTION 2.1: Add county input  */}
        <div>
          <label>County</label>
          <input {...register("county")} />
          {errors.county && (
            <p style={{ color: "red" }}>{errors.county.message}</p>
          )}
        </div>

        <div>
          <input type="checkbox" {...register("isHome")} />
          <label>County</label>
          {errors.isHome && (
            <p style={{ color: "red" }}>{errors.isHome.message}</p>
          )}
        </div>

        {/* SOLUTION 3.1: Add city input  */}
        {/* Insert code between lines */}
        {/* ----------------------------- */}
        <div>
          <label>City</label>
          <input {...register("city")} />
          {errors.city && <p style={{ color: "red" }}>{errors.city.message}</p>}
        </div>
        {/* ----------------------------- */}

        {/* SOLUTION 6.1: Add zipCode input  */}
        {/* Insert code between lines */}
        {/* ----------------------------- */}
        <div>
          <label>Cod postal</label>
          <input {...register("zipCode")} />
          {errors.zipCode && (
            <p style={{ color: "red" }}>{errors.zipCode.message}</p>
          )}
        </div>
        {/* ----------------------------- */}
        <button type="submit">Salveaza</button>
      </form>
    </div>
  );
};
