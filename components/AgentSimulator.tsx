"use client";

import React, { useState, useEffect } from "react";

interface AgentScenario {
  id: string;
  name: string;
  agentRole: string;
  architecture: string;
  promptSample: string;
  steps: {
    sender: "user" | "agent" | "system";
    message: string;
    nodeAction?: string;
  }[];
}

const SCENARIOS: AgentScenario[] = [
  {
    id: "lead-qualification",
    name: "Calificación y Routing B2B",
    agentRole: "LangGraph Intent & Scoring Agent",
    architecture: "LangGraph ➔ Claude/GPT-4 ➔ Apollo API ➔ HubSpot CRM",
    promptSample: "Lead entra por WhatsApp API solicitando migración Headless Shopify para tienda de 15K SKUs.",
    steps: [
      {
        sender: "user",
        message: "Hola, necesitamos cotizar un sprint de optimización para nuestra tienda Shopify Plus. Tenemos 15.000 productos y la web tarda 4s en cargar."
      },
      {
        sender: "system",
        message: "LangGraph StateGraph::RouteIntentNode — Metadata extraída: { platform: 'Shopify Plus', skus: 15000, pain_point: 'LCP latency' }",
        nodeAction: "STATE ROUTING: B2B_HIGH_VALUE"
      },
      {
        sender: "agent",
        message: "Analizado. Tienda enterprise con cuello de botella en renderizado Liquid. Verificando perfil de empresa vía Apollo API..."
      },
      {
        sender: "system",
        message: "HubSpot API: Contacto creado con scoring 94/100. Deal inyectado en etapa 'Technical Scoping' y link de agenda enviado.",
        nodeAction: "HUBSPOT_MUTATION_COMPLETE"
      },
      {
        sender: "agent",
        message: "Expediente listo. Tu ticket fue priorizado y agendado directamente con nuestro Lead Solutions Architect."
      }
    ]
  },
  {
    id: "stock-sync",
    name: "Sincronización Autonómica ERP",
    agentRole: "Python Worker & Inventory Daemon",
    architecture: "FastAPI Daemon ➔ Webhook Trigger ➔ SAP RFC ➔ Shopify Admin API",
    promptSample: "Drop masivo de inventario: SAP emite actualización de stock de 500 ítems en simultáneo.",
    steps: [
      {
        sender: "user",
        message: "Disparar evento: ERP_INVENTORY_DELTA_BATCH (500 ítems actualizados en depósito central)."
      },
      {
        sender: "system",
        message: "Python Daemon: Validando HMAC SHA256 payload... OK. Iniciando cola de procesamiento asíncrono con Celery/Redis.",
        nodeAction: "PAYLOAD_VALIDATED"
      },
      {
        sender: "agent",
        message: "Procesando reconciliación de inventario contra Shopify GraphQL Storefront API. Lote 1/5 sin discrepancias."
      },
      {
        sender: "system",
        message: "Mutación exitosa: 500 SKUs actualizados en 1.4s. 0 errores de stock, cache en Edge invalidada selectivamente.",
        nodeAction: "ZERO_STOCK_ERRORS"
      },
      {
        sender: "agent",
        message: "Inventario consolidado 100%. Tienda online y puntos de venta sincronizados en tiempo real."
      }
    ]
  },
  {
    id: "rag-support",
    name: "RAG Docs & Asistente Técnico",
    agentRole: "Vector Search & Retrieval Agent",
    architecture: "Pinecone / Qdrant ➔ Embeddings ➔ LangGraph Tool Calling",
    promptSample: "Pregunta sobre autenticación de webhooks y retención de expedientes con NOM-151.",
    steps: [
      {
        sender: "user",
        message: "¿Cómo aseguran la inmutabilidad y auditoría de los webhooks que envían al CRM y ERP?"
      },
      {
        sender: "system",
        message: "LangGraph ToolCalling::VectorRetrieval — Buscando en base de conocimiento técnica (SOPs, hashing, NOM-151)...",
        nodeAction: "EMBEDDING_SEARCH"
      },
      {
        sender: "agent",
        message: "Cada webhook cuenta con firma criptográfica HMAC en cabecera y registro de timestamp inmutable. En flujos de expedientes regulados, generamos constancias con hash verificable según estándares NOM-151 y retención de hasta 10 años."
      }
    ]
  }
];

export default function AgentSimulator() {
  const [activeScenario, setActiveScenario] = useState<AgentScenario>(SCENARIOS[0]);
  const [stepIndex, setStepIndex] = useState<number>(0);
  const [isRunning, setIsRunning] = useState<boolean>(true);

  useEffect(() => {
    setStepIndex(0);
    setIsRunning(true);
  }, [activeScenario]);

  useEffect(() => {
    if (!isRunning) return;

    if (stepIndex < activeScenario.steps.length - 1) {
      const timer = setTimeout(() => {
        setStepIndex((prev) => prev + 1);
      }, 1600);
      return () => clearTimeout(timer);
    } else {
      setIsRunning(false);
    }
  }, [stepIndex, isRunning, activeScenario]);

  return (
    <section id="agente-ia-simulador" className="w-full py-24 bg-[#01040f] text-slate-100 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Cabecera */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-mono mb-4">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            <span>AUTONOMOUS AGENTS & LANGGRAPH RUNTIME</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-black text-white tracking-tight">
            Agentes Autónomos en Acción Real.
          </h2>
          <p className="text-slate-400 text-base md:text-lg mt-4 leading-relaxed">
            No instalamos chatbots de respuestas fijas. Diseñamos <strong>agentes con LangGraph y Python</strong> con memoria de estado, llamadas a APIs externas e integración directa con tu CRM y bases de datos[cite: 1, 23, 24].
          </p>
        </div>

        {/* Selector de Escenarios */}
        <div className="flex flex-wrap gap-2 mb-8">
          {SCENARIOS.map((s) => (
            <button
              key={s.id}
              onClick={() => setActiveScenario(s)}
              className={`px-5 py-3 rounded-xl text-xs md:text-sm font-semibold font-mono transition-all duration-150 ${
                activeScenario.id === s.id
                  ? "bg-gradient-to-r from-[#0068ca] to-[#49c5b6] text-white shadow-lg shadow-cyan-500/20"
                  : "bg-slate-900/60 text-slate-400 hover:text-white hover:bg-slate-800 border border-slate-800"
              }`}
            >
              {s.name}
            </button>
          ))}
        </div>

        {/* Consola del Simulador */}
        <div className="grid lg:grid-cols-12 gap-8 bg-slate-950/90 border border-slate-800 rounded-3xl p-6 md:p-10 backdrop-blur-xl">
          
          {/* Lado Izquierdo: Terminal de Conversación / Ejecución */}
          <div className="lg:col-span-7 flex flex-col justify-between space-y-6">
            <div className="flex items-center justify-between border-b border-slate-800/80 pb-4">
              <div className="flex items-center space-x-2">
                <span className="w-3 h-3 rounded-full bg-red-500/80"></span>
                <span className="w-3 h-3 rounded-full bg-yellow-500/80"></span>
                <span className="w-3 h-3 rounded-full bg-green-500/80"></span>
                <span className="text-xs font-mono text-slate-400 ml-2">
                  terminal_agent://{activeScenario.id}
                </span>
              </div>
              <button
                onClick={() => {
                  setStepIndex(0);
                  setIsRunning(true);
                }}
                className="text-xs font-mono text-cyan-400 hover:text-cyan-300 underline"
              >
                Replay Run ↺
              </button>
            </div>

            {/* Mensajes y Nodos */}
            <div className="space-y-4 min-h-[320px] font-mono text-xs md:text-sm">
              {activeScenario.steps.slice(0, stepIndex + 1).map((step, idx) => (
                <div key={idx} className="transition-all duration-300">
                  {step.sender === "user" && (
                    <div className="bg-slate-900/90 border border-slate-800 p-4 rounded-xl text-slate-200">
                      <span className="text-[10px] text-cyan-400 block mb-1 uppercase tracking-wider">
                        ▶ Input del Usuario / Evento
                      </span>
                      {step.message}
                    </div>
                  )}

                  {step.sender === "system" && (
                    <div className="bg-black/80 border border-slate-800/90 p-3 rounded-xl text-slate-400 font-mono text-xs">
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-[10px] text-emerald-400 uppercase tracking-widest">
                          ⚡ {step.nodeAction}
                        </span>
                        <span className="text-[10px] text-slate-600">STATE_MUTATION</span>
                      </div>
                      <p className="text-slate-300">{step.message}</p>
                    </div>
                  )}

                  {step.sender === "agent" && (
                    <div className="bg-gradient-to-r from-[#0068ca]/20 to-[#49c5b6]/20 border border-cyan-500/30 p-4 rounded-xl text-white">
                      <span className="text-[10px] text-emerald-300 block mb-1 uppercase tracking-wider font-bold">
                        ● Cloudworks AI Agent
                      </span>
                      {step.message}
                    </div>
                  )}
                </div>
              ))}
            </div>

            <div className="text-[11px] font-mono text-slate-500 flex items-center justify-between pt-2 border-t border-slate-900">
              <span>Status: {isRunning ? "Ejecutando grafo..." : "Paso completado [OK]"}</span>
              <span>LangGraph v0.2.x Engine</span>
            </div>
          </div>

          {/* Lado Derecho: Arquitectura y Specs */}
          <div className="lg:col-span-5 bg-black/60 border border-slate-800/90 rounded-2xl p-6 md:p-8 flex flex-col justify-between space-y-6">
            <div>
              <span className="text-xs font-mono px-3 py-1 rounded-md bg-purple-500/15 text-purple-400 border border-purple-500/30 inline-block mb-3">
                {activeScenario.agentRole}
              </span>
              <h3 className="text-xl md:text-2xl font-bold text-white">
                {activeScenario.name}
              </h3>
              <p className="text-slate-400 text-xs md:text-sm mt-3 leading-relaxed">
                {activeScenario.promptSample}
              </p>
            </div>

            <div className="bg-slate-950 border border-slate-800/90 p-4 rounded-xl">
              <span className="text-[10px] font-mono uppercase text-slate-500 block mb-2">
                Arquitectura de Datos Conectada:
              </span>
              <span className="text-xs font-mono text-[#49c5b6] block leading-snug">
                {activeScenario.architecture}
              </span>
            </div>

            <div className="space-y-3">
              <span className="text-[11px] font-mono text-slate-400 uppercase tracking-wider block">
                Entregables de este Módulo:
              </span>
              <ul className="text-xs font-mono text-slate-300 space-y-1.5 list-disc list-inside">
                <li>Grafo de estados en LangGraph / Python[cite: 23, 24]</li>
                <li>Conexión bidireccional vía REST APIs y Webhooks[cite: 20, 24]</li>
                <li>Mapeo de propiedades y deals en HubSpot CRM[cite: 16, 24]</li>
                <li>Monitoreo de logs y reintentos ante fallas[cite: 24, 32]</li>
              </ul>
            </div>

            <div>
              <a
                href="https://meetings.hubspot.com/apalmieri-paso"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center px-6 py-4 rounded-xl bg-gradient-to-r from-[#0068ca] to-[#49c5b6] hover:opacity-95 text-white font-bold text-xs font-mono tracking-wide transition-all shadow-lg shadow-cyan-500/10 text-center"
              >
                Diseñar Agente a Medida →
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
