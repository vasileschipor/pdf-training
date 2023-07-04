import React from "react";

export const FirstFlowView = ({ register, onSubmit, errors }) => {
  // MOVE ALL LOGIC TO CONTAINER, VIEW COMPONENTS ONLY RENDER THE UI

  // STEP 7: Go through the whole flow to add a new email field. You should be able to do this yourself by now.
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
        {/* STEP 2.1: Add county input  */}
        {/* <div>
          <label>County</label>
          <input {...register("county")} />
          {errors.county && (
            <p style={{ color: "red" }}>{errors.county.message}</p>
          )}
        </div> */}

        <div>
          <input type="checkbox" {...register("isHome")} />
          <label>County</label>
          {errors.isHome && (
            <p style={{ color: "red" }}>{errors.isHome.message}</p>
          )}
        </div>

        {/* STEP 3.1: Add city input  */}
        {/* Insert code between lines */}
        {/* ----------------------------- */}

        {/* ----------------------------- */}

        {/* STEP 6.1: Add zipCode input  */}
        {/* Insert code between lines */}
        {/* ----------------------------- */}

        {/* ----------------------------- */}

        <button type="submit">Salveaza</button>
      </form>
    </div>
  );
};
